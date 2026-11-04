export interface ShopTimeStatus {
  isOpen: boolean;
  statusText: 'Open Now' | 'Closed';
  detailText: string;
  dayName: string;
  timeString: string;
}

/**
 * Calculates whether MasterTech Auto Repair (Spartanburg, SC - America/New_York)
 * is currently open according to their official business hours:
 * Mon - Fri: 8:00 AM - 5:30 PM
 * Sat - Sun: Closed
 */
export function getShopCurrentStatus(): ShopTimeStatus {
  try {
    const now = new Date();

    // Use Intl to get accurate Spartanburg, SC (America/New_York) calendar and time
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'short', // 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });

    const parts = formatter.formatToParts(now);
    const getPart = (type: string) => parts.find(p => p.type === type)?.value || '';
    const weekday = getPart('weekday');
    const hour = parseInt(getPart('hour'), 10) || 0;
    const minute = parseInt(getPart('minute'), 10) || 0;
    const currentMinutes = hour * 60 + minute;

    // 8:00 AM = 480 minutes, 5:30 PM (17:30) = 1050 minutes
    const isWeekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday);
    const isOpen = isWeekday && currentMinutes >= 480 && currentMinutes < 1050;

    let detailText = '';
    if (isOpen) {
      detailText = 'Closes 5:30 PM';
    } else if (isWeekday) {
      if (currentMinutes < 480) {
        detailText = 'Opens 8:00 AM Today';
      } else if (weekday === 'Fri') {
        detailText = 'Opens 8:00 AM Mon';
      } else {
        detailText = 'Opens 8:00 AM Tomorrow';
      }
    } else {
      // Sat or Sun
      detailText = 'Opens 8:00 AM Mon';
    }

    const timeDisplay = now.toLocaleTimeString('en-US', {
      timeZone: 'America/New_York',
      hour: 'numeric',
      minute: '2-digit',
    });

    return {
      isOpen,
      statusText: isOpen ? 'Open Now' : 'Closed',
      detailText,
      dayName: weekday,
      timeString: timeDisplay,
    };
  } catch {
    // Fallback if Intl timeZone fails
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const isWeekday = day >= 1 && day <= 5;
    const isOpen = isWeekday && hour >= 8 && hour < 17;
    return {
      isOpen,
      statusText: isOpen ? 'Open Now' : 'Closed',
      detailText: isOpen ? 'Closes 5:30 PM' : 'Opens 8:00 AM',
      dayName: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day],
      timeString: '',
    };
  }
}
