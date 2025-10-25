export const config = {
  appName: 'Auxilie',
  whatsappNumber: '+5511999999999',
  stats: {
    records: '10k',
    satisfaction: 98,
    amount: 'R$ 5M+'
  },
  plan: {
    currency: 'R$',
    price: '19.90',
    period: 'mês'
  },
  footer: {
    termsUrl: '/termos',
    privacyUrl: '/privacidade',
    faqUrl: '#pricing'
  }
};

export const getWhatsAppLink = () => {
  return `https://wa.me/${config.whatsappNumber.replace(/\D/g, '')}?text=Olá, gostaria de saber mais sobre o ${config.appName}`;
};
