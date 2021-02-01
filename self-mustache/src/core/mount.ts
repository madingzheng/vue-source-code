export default function mount(domStr:string) {
  const app = document.getElementById('app')
  app!.innerHTML = domStr
}