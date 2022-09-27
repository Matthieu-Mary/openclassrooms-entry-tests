
export default function Response({resTitle, resId}) {
  return (
    <input className={`btn btn-reverse-primary mb-10`} type="button" value={`${resId}-  ${resTitle}`} />
  )
}
