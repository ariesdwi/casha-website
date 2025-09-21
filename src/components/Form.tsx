interface FormProps {
  title: string
  onSubmit: (data: Record<string, string>) => void
  fields: {
    name: string
    label?: string
    type?: string
    placeholder: string
    required?: boolean
  }[]
  buttonLabel: string
}

export default function Form({ title, onSubmit, fields, buttonLabel }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = {}
    fields.forEach(f => {
      data[f.name] = formData.get(f.name) as string
    })
    onSubmit(data)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-background p-8 rounded-2xl shadow-lg space-y-6"
    >
      <h1 className="text-2xl font-bold text-center text-foreground">{title}</h1>

      {fields.map(f => (
        <div key={f.name} className="flex flex-col space-y-2">
          {f.label && (
            <label
              htmlFor={f.name}
              className="text-sm font-medium text-foreground/80"
            >
              {f.label}
              {f.required && <span className="text-red-500 ml-1">*</span>}
            </label>
          )}
          <input
            id={f.name}
            type={f.type || "text"}
            name={f.name}
            placeholder={f.placeholder}
            required={f.required}
            className="w-full px-4 py-3 border border-foreground/20 rounded-lg 
                       bg-background text-foreground placeholder-foreground/50
                       focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold 
                   hover:bg-indigo-700 transition focus:ring-2 focus:ring-indigo-400"
      >
        {buttonLabel}
      </button>
    </form>
  )
}
