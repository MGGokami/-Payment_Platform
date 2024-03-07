export async function getDinamicQr() {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('1203812093812093812038120938')
    }, 2000);
  })
}