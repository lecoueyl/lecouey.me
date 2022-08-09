export async function disableScroll() {
  document.querySelector('body').classList.add('overflow-hidden');
}

export async function enableScroll() {
  document.querySelector('body').classList.remove('overflow-hidden');
}
