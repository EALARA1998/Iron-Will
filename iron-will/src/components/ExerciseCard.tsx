type ExerciseCardProps = {
  exerciseName?: string
  series?: string
  restTime?: string
  imageSrc?: string
}

export default function ExerciseCard({ exerciseName, series, restTime, imageSrc }:ExerciseCardProps) {
  return (
    <>
      <section className='border p-5 rounded-2xl w-70 flex flex-col items-center'>
        <h5>{exerciseName}</h5>
        <p>{series}</p>
        <p>{restTime}</p>
        <img className='w-50 h-50' src={imageSrc} alt={exerciseName} />
      </section>
    </>
  )
}