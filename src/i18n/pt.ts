/**
 * Brazilian Portuguese UI Dictionary & Localization Helpers
 */

export const ptUI = {
  locale: "pt-BR",
  siteTitle: "CountDays — Calculadora de Dias Entre Datas e Dias Úteis",
  siteDescription: "Calcule a quantidade exata de dias corridos, dias úteis e semanas entre duas datas com feriados nacionais do Brasil. Rápido, preciso e gratuito.",
  
  nav: {
    home: "Início",
    calculator: "Calculadora de Dias",
    businessDays: "Dias Úteis no Brasil",
    countdowns: "Feriados & Férias",
    customTimer: "Criar Contador",
    about: "Sobre",
    privacy: "Privacidade",
    terms: "Termos",
    contact: "Contato"
  },

  calculator: {
    title: "Calculadora de Dias Entre Duas Datas",
    subtitle: "Calcule a duração exata em dias corridos, dias úteis e semanas entre qualquer intervalo de datas no Brasil.",
    quickPresetsTitle: "Atalhos Rápidos:",
    preset30: "+30 Dias",
    preset90: "+90 Dias (Trimestre)",
    presetEndMonth: "Fim do Mês",
    presetNewYear: "Ano Novo",
    startDate: "Data de Início",
    endDate: "Data de Fim",
    includeEndDate: "Incluir data final no cálculo (adicionar 1 dia)",
    calculateBtn: "Calcular Dias",
    
    // Results
    totalDays: "Dias Corridos",
    totalDaysSub: "Tempo Total",
    businessDays: "Dias Úteis",
    businessDaysSub: "Segunda a Sexta",
    weeks: "Semanas",
    weeksSub: "Semanas Completas",
    weekends: "Finais de Semana",
    weekendsSub: "Sábados e Domingos",
    breakdownLabel: "Detalhamento",
    yearShareLabel: "Parcela do Ano",
    totalHoursLabel: "Total de Horas",
    copySummary: "Copiar Resumo",
    copied: "Copiado! ✅",

    // Explanations
    monthsAndWeeks: (months: number, weeks: number, days: number) => 
      `${months} meses, ou ${weeks} semanas e ${days} dias.`,
    yearPercentage: (pct: string) => `${pct}% de um ano padrão de 365 dias`,
    hoursFormatted: (hours: number) => `aprox. ${hours.toLocaleString('pt-BR')} horas`
  }
};

/**
 * Format a Date to YYYY-MM-DD for date inputs
 */
export function formatDateForInputPT(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Format a date string to Brazilian Portuguese format (DD/MM/YYYY)
 */
export function formatDateBR(dateStr: string): string {
  const [y, m, d] = dateStr.split('-');
  return `${d}/${m}/${y}`;
}
