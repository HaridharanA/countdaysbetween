import holidaysData from "./holidays.json";

export interface HolidayPairConfig {
  slug: string;
  holidayKey1: string;
  holidayKey2: string;
  title: string;
  headline: string;
  category: string;
  intentReason: string;
  crossYear?: boolean;
}

export interface YearPairCalculation {
  year: number;
  date1: string;
  dayOfWeek1: string;
  date2: string;
  dayOfWeek2: string;
  totalDays: number;
  businessDays: number;
  weekendDays: number;
  weeks: number;
  remainingDays: number;
  isCurrentYear: boolean;
}

export interface HolidayPairData extends HolidayPairConfig {
  holiday1: {
    name: string;
    holidayName: string;
    icon: string;
    slug2026: string;
    category: string;
    date2026: string;
    dayOfWeek2026: string;
    summary: string;
  };
  holiday2: {
    name: string;
    holidayName: string;
    icon: string;
    slug2026: string;
    category: string;
    date2026: string;
    dayOfWeek2026: string;
    summary: string;
  };
  currentCalculation: YearPairCalculation;
  fiveYearSchedule: YearPairCalculation[];
  faqs: { question: string; answer: string }[];
}

export const holidayPairsConfig: HolidayPairConfig[] = [
  // Winter & Holiday Shopping Season
  {
    slug: "thanksgiving-and-christmas",
    holidayKey1: "thanksgiving",
    holidayKey2: "christmas",
    title: "Days Between Thanksgiving and Christmas",
    headline: "Days Between Thanksgiving & Christmas",
    category: "Holiday Season & Retail",
    intentReason: "The window between Thanksgiving and Christmas is the peak holiday shopping, family travel, and year-end celebration season. Because Thanksgiving falls on the fourth Thursday of November, the exact number of days between the two holidays shifts every year between 26 and 32 days, heavily impacting retail schedules, shipping deadlines, and holiday vacation planning."
  },
  {
    slug: "black-friday-and-christmas",
    holidayKey1: "black-friday",
    holidayKey2: "christmas",
    title: "Days Between Black Friday and Christmas",
    headline: "Days Between Black Friday & Christmas",
    category: "Holiday Shopping",
    intentReason: "Black Friday signals the official kickoff of holiday gift buying. Tracking the days between Black Friday and Christmas is vital for shoppers securing deals, e-commerce stores managing fulfillment windows, and holiday shippers meeting carrier delivery cutoffs."
  },
  {
    slug: "cyber-monday-and-christmas",
    holidayKey1: "cyber-monday",
    holidayKey2: "christmas",
    title: "Days Between Cyber Monday and Christmas",
    headline: "Days Between Cyber Monday & Christmas",
    category: "Holiday Shopping",
    intentReason: "Cyber Monday marks the biggest online retail shopping day in the United States. Knowing the exact duration between Cyber Monday and Christmas helps online shoppers ensure on-time package arrival and manage standard ground shipping deadlines."
  },
  {
    slug: "halloween-and-thanksgiving",
    holidayKey1: "halloween",
    holidayKey2: "thanksgiving",
    title: "Days Between Halloween and Thanksgiving",
    headline: "Days Between Halloween & Thanksgiving",
    category: "Fall Holidays",
    intentReason: "The bridge between Halloween (October 31) and Thanksgiving represents the transition into late autumn. Many families, schools, and event organizers track this window to plan Thanksgiving travel, plan fall breaks, and prepare festive decorations."
  },
  {
    slug: "halloween-and-christmas",
    holidayKey1: "halloween",
    holidayKey2: "christmas",
    title: "Days Between Halloween and Christmas",
    headline: "Days Between Halloween & Christmas",
    category: "Holiday Season",
    intentReason: "Spanning the final two months of the calendar year, the duration between Halloween and Christmas covers Thanksgiving, Black Friday, and the entire holiday sprint. Planning ahead across these weeks allows for stress-free holiday budgeting and travel booking."
  },
  {
    slug: "veterans-day-and-thanksgiving",
    holidayKey1: "veterans-day",
    holidayKey2: "thanksgiving",
    title: "Days Between Veterans Day and Thanksgiving",
    headline: "Days Between Veterans Day & Thanksgiving",
    category: "Fall Holidays",
    intentReason: "Veterans Day (November 11) is the last federal holiday before Thanksgiving. This short 2-to-3 week span is a crucial period for corporate workforces, academic calendars, and holiday travel logistics."
  },
  {
    slug: "thanksgiving-and-black-friday",
    holidayKey1: "thanksgiving",
    holidayKey2: "black-friday",
    title: "Days Between Thanksgiving and Black Friday",
    headline: "Days Between Thanksgiving & Black Friday",
    category: "Holiday Shopping",
    intentReason: "Black Friday takes place the immediate day after Thanksgiving (1 day apart). Shoppers and retail workers track this exact 24-hour turnaround for early bird doorbusters and holiday meal cleanups."
  },
  {
    slug: "thanksgiving-and-cyber-monday",
    holidayKey1: "thanksgiving",
    holidayKey2: "cyber-monday",
    title: "Days Between Thanksgiving and Cyber Monday",
    headline: "Days Between Thanksgiving & Cyber Monday",
    category: "Holiday Shopping",
    intentReason: "Cyber Monday occurs four days after Thanksgiving, following the Thanksgiving weekend. This duration encompasses the prime 5-day Cyber Week shopping window."
  },
  {
    slug: "thanksgiving-and-new-years-day",
    holidayKey1: "thanksgiving",
    holidayKey2: "new-years-day",
    title: "Days Between Thanksgiving and New Year's Day",
    headline: "Days Between Thanksgiving & New Year's Day",
    category: "Holiday Season",
    crossYear: true,
    intentReason: "The period from Thanksgiving to New Year's Day encompasses the full winter holiday season, including Christmas and New Year's Eve. Businesses use this timeframe for Q4 fiscal closings, employee vacation schedules, and holiday bonuses."
  },
  {
    slug: "christmas-and-new-years-eve",
    holidayKey1: "christmas",
    holidayKey2: "new-years-eve",
    title: "Days Between Christmas and New Year's Eve",
    headline: "Days Between Christmas & New Year's Eve",
    category: "Winter Holidays",
    intentReason: "The famous 'holiday week' between Christmas (December 25) and New Year's Eve (December 31) is always exactly 6 days. It is one of the most popular vacation and travel periods of the year."
  },
  {
    slug: "christmas-and-new-years-day",
    holidayKey1: "christmas",
    holidayKey2: "new-years-day",
    title: "Days Between Christmas and New Year's Day",
    headline: "Days Between Christmas & New Year's Day",
    category: "Winter Holidays",
    crossYear: true,
    intentReason: "There are exactly 7 days (1 full week) between Christmas Day and New Year's Day. Tracking this week helps plan winter break trips, return-to-office schedules, and holiday downtime."
  },
  {
    slug: "christmas-eve-and-christmas",
    holidayKey1: "christmas-eve",
    holidayKey2: "christmas",
    title: "Days Between Christmas Eve and Christmas",
    headline: "Days Between Christmas Eve & Christmas",
    category: "Winter Holidays",
    intentReason: "Christmas Eve (December 24) precedes Christmas Day (December 25) by exactly 1 day. Families track this countdown for festive church services, gift opening traditions, and holiday dinner preparations."
  },
  {
    slug: "new-years-eve-and-new-years-day",
    holidayKey1: "new-years-eve",
    holidayKey2: "new-years-day",
    title: "Days Between New Year's Eve and New Year's Day",
    headline: "Days Between New Year's Eve & New Year's Day",
    category: "Winter Holidays",
    crossYear: true,
    intentReason: "New Year's Eve and New Year's Day mark the transition between calendar years (1 day difference). It is the world's most universal celebration threshold."
  },

  // Summer Window & Patriotic Holidays
  {
    slug: "memorial-day-and-labor-day",
    holidayKey1: "memorial-day",
    holidayKey2: "labor-day",
    title: "Days Between Memorial Day and Labor Day",
    headline: "Days Between Memorial Day & Labor Day (Summer Season)",
    category: "Summer Season",
    intentReason: "Memorial Day in late May and Labor Day in early September define the unofficial start and end of American summer. This ~14-week window (~100 days) is the peak season for school summer vacations, beach travel, outdoor recreation, and seasonal business operations."
  },
  {
    slug: "memorial-day-and-independence-day",
    holidayKey1: "memorial-day",
    holidayKey2: "independence-day",
    title: "Days Between Memorial Day and 4th of July",
    headline: "Days Between Memorial Day & 4th of July",
    category: "Summer Season",
    intentReason: "The span between Memorial Day and the 4th of July (Independence Day) covers the first half of summer. Families and camps calculate these weeks to organize June activities and early summer road trips."
  },
  {
    slug: "independence-day-and-labor-day",
    holidayKey1: "independence-day",
    holidayKey2: "labor-day",
    title: "Days Between 4th of July and Labor Day",
    headline: "Days Between 4th of July & Labor Day",
    category: "Summer Season",
    intentReason: "From the 4th of July to Labor Day spans the second half of summer (approx. 9 weeks / 60+ days). This timeframe covers late-summer getaways, back-to-school preparations, and August company slowdowns."
  },
  {
    slug: "memorial-day-and-juneteenth",
    holidayKey1: "memorial-day",
    holidayKey2: "juneteenth",
    title: "Days Between Memorial Day and Juneteenth",
    headline: "Days Between Memorial Day & Juneteenth",
    category: "Federal Holidays",
    intentReason: "Memorial Day (late May) and Juneteenth (June 19) are back-to-back federal holidays approximately three weeks apart, providing opportunities for early summer long weekends."
  },
  {
    slug: "juneteenth-and-independence-day",
    holidayKey1: "juneteenth",
    holidayKey2: "independence-day",
    title: "Days Between Juneteenth and 4th of July",
    headline: "Days Between Juneteenth & 4th of July",
    category: "Federal Holidays",
    intentReason: "Juneteenth (June 19) and the 4th of July (July 4) are separated by just 15 days, making late June and early July one of the most holiday-dense periods of the summer calendar."
  },
  {
    slug: "fathers-day-and-independence-day",
    holidayKey1: "fathers-day",
    holidayKey2: "independence-day",
    title: "Days Between Father's Day and 4th of July",
    headline: "Days Between Father's Day & 4th of July",
    category: "Summer Season",
    intentReason: "Father's Day on the third Sunday of June is followed shortly by Independence Day on July 4. This 2-to-3 week duration is prime for summer barbecues and family gatherings."
  },

  // Spring & Family Milestones
  {
    slug: "mothers-day-and-fathers-day",
    holidayKey1: "mothers-day",
    holidayKey2: "fathers-day",
    title: "Days Between Mother's Day and Father's Day",
    headline: "Days Between Mother's Day & Father's Day",
    category: "Family & Parent Milestones",
    intentReason: "Mother's Day (second Sunday in May) and Father's Day (third Sunday in June) are celebrated approximately 5 to 6 weeks apart (typically 35 to 42 days). Families use this timeframe to plan gifts, cards, and family celebrations."
  },
  {
    slug: "mothers-day-and-memorial-day",
    holidayKey1: "mothers-day",
    holidayKey2: "memorial-day",
    title: "Days Between Mother's Day and Memorial Day",
    headline: "Days Between Mother's Day & Memorial Day",
    category: "Spring Holidays",
    intentReason: "Occurring in May, Mother's Day precedes Memorial Day weekend by about 2 to 3 weeks, marking the ramp-up to late spring and warmer weather."
  },
  {
    slug: "easter-and-mothers-day",
    holidayKey1: "easter",
    holidayKey2: "mothers-day",
    title: "Days Between Easter and Mother's Day",
    headline: "Days Between Easter & Mother's Day",
    category: "Spring Holidays",
    intentReason: "Because Easter is a lunar-based movable feast that can occur anywhere between March 22 and April 25, the gap between Easter and Mother's Day changes substantially each year, ranging from 2 to 7 weeks."
  },
  {
    slug: "valentines-day-and-easter",
    holidayKey1: "valentines-day",
    holidayKey2: "easter",
    title: "Days Between Valentine's Day and Easter",
    headline: "Days Between Valentine's Day & Easter",
    category: "Spring Holidays",
    intentReason: "The period between Valentine's Day (February 14) and Easter spans the late winter and early spring season, encompassing Lent and spring break planning."
  },
  {
    slug: "st-patricks-day-and-easter",
    holidayKey1: "st-patricks-day",
    holidayKey2: "easter",
    title: "Days Between St. Patrick's Day and Easter",
    headline: "Days Between St. Patrick's Day & Easter",
    category: "Spring Holidays",
    intentReason: "St. Patrick's Day (March 17) and Easter are both major spring cultural and religious milestones. Depending on when Easter falls, this gap varies between a few days and over a month."
  },
  {
    slug: "cinco-de-mayo-and-memorial-day",
    holidayKey1: "cinco-de-mayo",
    holidayKey2: "memorial-day",
    title: "Days Between Cinco de Mayo and Memorial Day",
    headline: "Days Between Cinco de Mayo & Memorial Day",
    category: "Spring Holidays",
    intentReason: "Cinco de Mayo (May 5) precedes Memorial Day by roughly 3 weeks, welcoming early outdoor dining and spring social events."
  },

  // Early Year & Winter Holidays
  {
    slug: "new-years-day-and-super-bowl",
    holidayKey1: "new-years-day",
    holidayKey2: "super-bowl",
    title: "Days Between New Year's Day and Super Bowl",
    headline: "Days Between New Year's Day & Super Bowl",
    category: "Sports & Celebrations",
    intentReason: "The Super Bowl takes place in early-to-mid February, approximately 5 to 6 weeks after New Year's Day. Sports fans and advertisers calculate this window to prepare game-day watch parties and campaigns."
  },
  {
    slug: "new-years-day-and-valentines-day",
    holidayKey1: "new-years-day",
    holidayKey2: "valentines-day",
    title: "Days Between New Year's Day and Valentine's Day",
    headline: "Days Between New Year's Day & Valentine's Day",
    category: "Winter Holidays",
    intentReason: "From January 1st to Valentine's Day on February 14th is always 44 days (45 days in a leap year). It is a key marketing and personal fitness resolution checkpoint."
  },
  {
    slug: "mlk-day-and-presidents-day",
    holidayKey1: "mlk-day",
    holidayKey2: "presidents-day",
    title: "Days Between MLK Day and Presidents' Day",
    headline: "Days Between MLK Day & Presidents' Day",
    category: "Federal Holidays",
    intentReason: "Martin Luther King Jr. Day (third Monday in January) and Presidents' Day (third Monday in February) are separated by exactly 4 weeks (28 days). Schools and businesses use this cadence for winter terms and holiday closures."
  },
  {
    slug: "super-bowl-and-valentines-day",
    holidayKey1: "super-bowl",
    holidayKey2: "valentines-day",
    title: "Days Between Super Bowl and Valentine's Day",
    headline: "Days Between Super Bowl & Valentine's Day",
    category: "Winter Holidays",
    intentReason: "Super Bowl Sunday and Valentine's Day often fall within the same week in mid-February, creating a high-energy weekend of sports entertainment followed immediately by romantic celebrations."
  },
  {
    slug: "valentines-day-and-presidents-day",
    holidayKey1: "valentines-day",
    holidayKey2: "presidents-day",
    title: "Days Between Valentine's Day and Presidents' Day",
    headline: "Days Between Valentine's Day & Presidents' Day",
    category: "Winter Holidays",
    intentReason: "Valentine's Day (Feb 14) and Presidents' Day (third Monday of February) frequently occur within days of each other, often aligning into a romantic 3-day holiday weekend."
  },
  {
    slug: "valentines-day-and-st-patricks-day",
    holidayKey1: "valentines-day",
    holidayKey2: "st-patricks-day",
    title: "Days Between Valentine's Day and St. Patrick's Day",
    headline: "Days Between Valentine's Day & St. Patrick's Day",
    category: "Winter to Spring",
    intentReason: "There are 31 days (32 in a leap year) between Valentine's Day (Feb 14) and St. Patrick's Day (March 17). It spans the bridge from mid-winter to the beginning of spring."
  },
  {
    slug: "presidents-day-and-memorial-day",
    holidayKey1: "presidents-day",
    holidayKey2: "memorial-day",
    title: "Days Between Presidents' Day and Memorial Day",
    headline: "Days Between Presidents' Day & Memorial Day",
    category: "Federal Holidays",
    intentReason: "Presidents' Day in mid-February to Memorial Day in late May spans over 14 weeks without a universal federal Monday holiday, making it a critical stretch for corporate productivity and school spring semesters."
  },

  // Autumn Transitions
  {
    slug: "labor-day-and-halloween",
    holidayKey1: "labor-day",
    holidayKey2: "halloween",
    title: "Days Between Labor Day and Halloween",
    headline: "Days Between Labor Day & Halloween",
    category: "Fall Holidays",
    intentReason: "The duration from Labor Day in early September to Halloween on October 31 covers the heart of the autumn season, school return, and fall sports leagues (about 8 weeks / 55–60 days)."
  },
  {
    slug: "labor-day-and-thanksgiving",
    holidayKey1: "labor-day",
    holidayKey2: "thanksgiving",
    title: "Days Between Labor Day and Thanksgiving",
    headline: "Days Between Labor Day & Thanksgiving",
    category: "Fall Holidays",
    intentReason: "Spanning September through late November (~11 to 12 weeks), this window defines the standard academic fall term and corporate Q4 sprint."
  },
  {
    slug: "fall-equinox-and-halloween",
    holidayKey1: "fall-equinox",
    holidayKey2: "halloween",
    title: "Days Between Fall Equinox and Halloween",
    headline: "Days Between First Day of Fall & Halloween",
    category: "Fall Season",
    intentReason: "From the autumnal equinox (approx. September 22) to Halloween (October 31) is approximately 39 days, marking the peak foliage and pumpkin season across North America."
  },

  // Astronomical Seasons (Equinoxes & Solstices)
  {
    slug: "spring-equinox-and-summer-solstice",
    holidayKey1: "spring-equinox",
    holidayKey2: "summer-solstice",
    title: "Days Between Spring Equinox and Summer Solstice",
    headline: "Days Between First Day of Spring & Summer Solstice",
    category: "Astronomical Seasons",
    intentReason: "The duration between the vernal equinox (March 20) and the summer solstice (June 20/21) measures the exact astronomical length of Spring in the Northern Hemisphere (typically 92.75 days)."
  },
  {
    slug: "summer-solstice-and-fall-equinox",
    holidayKey1: "summer-solstice",
    holidayKey2: "fall-equinox",
    title: "Days Between Summer Solstice and Fall Equinox",
    headline: "Days Between Summer Solstice & First Day of Fall",
    category: "Astronomical Seasons",
    intentReason: "Measuring from the summer solstice (June 20/21) to the autumnal equinox (September 22/23) calculates the exact astronomical length of Summer in the Northern Hemisphere (approx. 93.65 days)."
  },
  {
    slug: "fall-equinox-and-winter-solstice",
    holidayKey1: "fall-equinox",
    holidayKey2: "winter-solstice",
    title: "Days Between Fall Equinox and Winter Solstice",
    headline: "Days Between First Day of Fall & Winter Solstice",
    category: "Astronomical Seasons",
    intentReason: "From the autumnal equinox (September 22/23) to the winter solstice (December 21/22) is the exact astronomical length of Autumn / Fall (approx. 89.85 days)."
  },
  {
    slug: "winter-solstice-and-spring-equinox",
    holidayKey1: "winter-solstice",
    holidayKey2: "spring-equinox",
    title: "Days Between Winter Solstice and Spring Equinox",
    headline: "Days Between Winter Solstice & First Day of Spring",
    category: "Astronomical Seasons",
    crossYear: true,
    intentReason: "Measuring from the winter solstice in late December to the vernal equinox in late March calculates the exact astronomical duration of Winter (approx. 88.99 days)."
  }
];

function calculateDaysBetweenDates(d1Str: string, d2Str: string): {
  totalDays: number;
  businessDays: number;
  weekendDays: number;
  weeks: number;
  remainingDays: number;
} {
  const d1 = new Date(d1Str + "T00:00:00Z");
  const d2 = new Date(d2Str + "T00:00:00Z");
  const diffMs = Math.abs(d2.getTime() - d1.getTime());
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  let businessDays = 0;
  let weekendDays = 0;
  const start = new Date(d1 < d2 ? d1 : d2);
  const end = new Date(d1 < d2 ? d2 : d1);

  while (start < end) {
    const day = start.getUTCDay();
    if (day === 0 || day === 6) {
      weekendDays++;
    } else {
      businessDays++;
    }
    start.setUTCDate(start.getUTCDate() + 1);
  }

  const weeks = Math.floor(totalDays / 7);
  const remainingDays = totalDays % 7;

  return { totalDays, businessDays, weekendDays, weeks, remainingDays };
}

export function getAllHolidayPairsData(): HolidayPairData[] {
  const holidaysMap = new Map<string, any[]>();
  for (const h of holidaysData) {
    if (!holidaysMap.has(h.holidayKey)) {
      holidaysMap.set(h.holidayKey, []);
    }
    holidaysMap.get(h.holidayKey)!.push(h);
  }

  return holidayPairsConfig.map((pair) => {
    const list1 = holidaysMap.get(pair.holidayKey1) || [];
    const list2 = holidaysMap.get(pair.holidayKey2) || [];

    const h1_2026 = list1.find((x) => x.year === 2026) || list1[0];
    const h2_2026 = list2.find((x) => x.year === (pair.crossYear ? 2027 : 2026)) || list2[0];

    const pastFuture1 = h1_2026?.pastFutureDates || [];
    const pastFuture2 = h2_2026?.pastFutureDates || [];

    const years = [2024, 2025, 2026, 2027, 2028];
    const fiveYearSchedule: YearPairCalculation[] = [];

    for (const yr of years) {
      const targetYr2 = pair.crossYear ? yr + 1 : yr;
      const pf1 = pastFuture1.find((p: any) => p.year === yr);
      const pf2 = pastFuture2.find((p: any) => p.year === targetYr2);

      if (pf1 && pf2) {
        const stats = calculateDaysBetweenDates(pf1.date, pf2.date);
        fiveYearSchedule.push({
          year: yr,
          date1: pf1.date,
          dayOfWeek1: pf1.dayOfWeek,
          date2: pf2.date,
          dayOfWeek2: pf2.dayOfWeek,
          totalDays: stats.totalDays,
          businessDays: stats.businessDays,
          weekendDays: stats.weekendDays,
          weeks: stats.weeks,
          remainingDays: stats.remainingDays,
          isCurrentYear: yr === 2026
        });
      }
    }

    const currentCalc =
      fiveYearSchedule.find((s) => s.year === 2026) ||
      fiveYearSchedule[0] || {
        year: 2026,
        date1: h1_2026?.date || "2026-01-01",
        dayOfWeek1: h1_2026?.dayOfWeek || "Thursday",
        date2: h2_2026?.date || "2026-12-25",
        dayOfWeek2: h2_2026?.dayOfWeek || "Friday",
        totalDays: 0,
        businessDays: 0,
        weekendDays: 0,
        weeks: 0,
        remainingDays: 0,
        isCurrentYear: true
      };

    const h1Name = h1_2026?.holidayName || h1_2026?.name || pair.holidayKey1;
    const h2Name = h2_2026?.holidayName || h2_2026?.name || pair.holidayKey2;

    const faqs = [
      {
        question: `How many days are between ${h1Name} and ${h2Name} in 2026?`,
        answer: `In 2026, there are exactly ${currentCalc.totalDays} calendar days (${currentCalc.weeks} weeks and ${currentCalc.remainingDays} days) between ${h1Name} (${currentCalc.dayOfWeek1}, ${currentCalc.date1}) and ${h2Name} (${currentCalc.dayOfWeek2}, ${currentCalc.date2}).`
      },
      {
        question: `How many working business days are between ${h1Name} and ${h2Name}?`,
        answer: `In 2026, there are ${currentCalc.businessDays} working business days (Monday through Friday) and ${currentCalc.weekendDays} weekend days between ${h1Name} and ${h2Name}.`
      },
      {
        question: `Why does the number of days between ${h1Name} and ${h2Name} vary?`,
        answer: `Holidays defined by floating weekday rules (such as 'the fourth Thursday of November' for Thanksgiving or lunar calculations for Easter) change calendar dates every year. As a result, the interval between ${h1Name} and ${h2Name} shifts by several days across calendar cycles.`
      },
      {
        question: `How can I calculate days between custom dates?`,
        answer: `You can use our free online Date Calculator at countdaysbetween.com to compute exact calendar days, working days, and time breakdowns between any two custom calendar dates.`
      }
    ];

    return {
      ...pair,
      holiday1: {
        name: h1_2026?.name || h1Name,
        holidayName: h1Name,
        icon: h1_2026?.icon || "📅",
        slug2026: h1_2026?.slug || `${pair.holidayKey1}-2026`,
        category: h1_2026?.category || "Holiday",
        date2026: currentCalc.date1,
        dayOfWeek2026: currentCalc.dayOfWeek1,
        summary: h1_2026?.description?.[0] || ""
      },
      holiday2: {
        name: h2_2026?.name || h2Name,
        holidayName: h2Name,
        icon: h2_2026?.icon || "📅",
        slug2026: h2_2026?.slug || `${pair.holidayKey2}-2026`,
        category: h2_2026?.category || "Holiday",
        date2026: currentCalc.date2,
        dayOfWeek2026: currentCalc.dayOfWeek2,
        summary: h2_2026?.description?.[0] || ""
      },
      currentCalculation: currentCalc,
      fiveYearSchedule,
      faqs
    };
  });
}
