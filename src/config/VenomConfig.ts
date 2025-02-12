import venom from 'venom-bot';

export const startVenomClient = () => {
  return venom.create({
  session: 'my-session',  // Nome da sessão
  multidevice: true        // Não é reconhecido em todas as versões
}).then(client => {
  console.log('Bot conectado');
}).catch(error => {
  console.error(error);
});// Habilita multiplos dispositivos
  
};