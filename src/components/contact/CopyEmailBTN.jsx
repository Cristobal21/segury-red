import { Toaster, toast } from 'sonner'

export default function CopyEmailBTN() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText('contacto@seguryred.cl')
    toast.success('Correo copiado')
  }

  return (
    <>
      <Toaster position="bottom-right" />

      <button
        onClick={copyEmail}
        className="flex w-full items-center justify-center rounded-xl bg-amber-500 px-4 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-amber-600"
      >
        Copiar Correo
      </button>
    </>
  )
}
