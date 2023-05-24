type Props = {
  text: string
}

export function ErrorText({ text }: Props) {
  return <small className="f-12 text-danger">{text}</small>
}
