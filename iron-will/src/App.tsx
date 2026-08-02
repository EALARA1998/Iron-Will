import {
  benchPressGif,
  dumbbellBenchPressGif,
  seatedDumbbellShoulderPressGif,
  inclineDumbbellPressGif,
  dumbbellLateralRaiseGif,
  dumbebellFlyGif,
  standingCableFlyGif,
  pecDeckFlyMachineGif,
  cablePushDownGif,
  skullCrusherGif,
  pushUpGif,
  barbellStandingMilitaryPressGif,
  barbellInclineBenchPressGif,
  cableLateralRaiseGif,
  dumbbellTricepExtensionGif,
  dumbbellKickbackGif,
} from './assets/gifs/exercices/push/index'
import { 
  hammerMachineRowing,
  dumbbellPulloverGif,
  pullUpGif,
  magGripLatPulldownGif,
  parallelGripLatPulldownGif,
  underhandLatPulldownGif,
  underhandBarbellRowGif,
  seatedCableRowGif,
  oneArmDumbbellRowGif,
  facePullGif,
  barbellBicepCurlGif,
  dumbbellHammerCurlGif,
  dumbbellShrugGif,
  bentoverDumbbellLateralRaise,
  barbellShrug,
} from './assets/gifs/exercices/pull/index'
import {
  barbellStandingCalfRaise,
  bodyweightKneelingSissySquat,
  dumbbellBulgarianSplitSquat,
  dumbbellGobletSquat,
  dumbbellLegCurlGif,
  dumbbellLunge,
  hackSquatMachine,
  hangingLegRaise,
  legCurl,
  legExtension,
  legPress,
  pausedBackSquat,
  pausedDeadlift,
  seatedLegCurl,
  singleLegRDL,
  weightedDeclineCrunch
} from './assets/gifs/exercices/legs'
import {
  yoga
} from './assets/gifs/exercices/others/index'
import { useMemo, useState } from 'react'
import { unit } from 'mathjs';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import ExerciseCard from './components/ExerciseCard'


function App() {

  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(170)
  const [age, setAge] = useState(25)
  const [weightUnit, setWeightUnit] = useState('kg')
  const [heightUnit, setHeightUnit] = useState('cm')
  const [activityFactor, setActivityFactor] = useState(1.2)
  const [caloricAdjustment, setCaloricAdjustment] = useState(0)
  const tmbMan = useMemo(() => {
    const weightKg = unit(`${weight} ${weightUnit}`).toNumber('kg'); 
    const heightCm = unit(`${height} ${heightUnit}`).toNumber('cm');
    return (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
  }, [weight, height, age, weightUnit, heightUnit]);
  const tmbWoman = useMemo(() => {
    const weightKg = unit(`${weight} ${weightUnit}`).toNumber('kg');
    const heightCm = unit(`${height} ${heightUnit}`).toNumber('cm');
    return (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
  }, [weight, height, age, weightUnit, heightUnit]);
  const tdeeMan = useMemo(() => tmbMan * activityFactor, [tmbMan, activityFactor]);
  const tdeeWoman = useMemo(() => tmbWoman * activityFactor, [tmbWoman, activityFactor]);
  const totalCaloricMan = useMemo(() => tdeeMan + caloricAdjustment, [tdeeMan, caloricAdjustment]);
  const totalCaloricWoman = useMemo(() => tdeeWoman + caloricAdjustment, [tdeeWoman, caloricAdjustment]);
  const proteinGrams = useMemo(() => {
    const weightKg = unit(`${weight} ${weightUnit}`).toNumber('kg');
    return weightKg * 2.2;
  }, [weight, weightUnit]);
  const fatGrams = useMemo(() => {
    const weightKg = unit(`${weight} ${weightUnit}`).toNumber('kg');
    return weightKg * 1.0;
  }, [weight, weightUnit]);
  const carbGramsMan = useMemo(() => {
    return (totalCaloricMan - (proteinGrams * 4) - (fatGrams * 9)) / 4;
  }, [totalCaloricMan, proteinGrams, fatGrams]);
  const carbGramsWoman = useMemo(() => {
    return (totalCaloricWoman - (proteinGrams * 4) - (fatGrams * 9)) / 4;
  }, [totalCaloricWoman, proteinGrams, fatGrams]);

  return (
    <>
      <h1 className="font-bold pb-5 text-center text-2xl">Rutina Empuje / Tracción / Piernas (6 días)</h1>
      <section className="pb-5">
        <h2>Día 1 y 4: Empuje (Pecho, Hombros, Tríceps)</h2>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 1 (Enfocado en el pecho completo)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Press de banca con barra (Barbell Bench Press)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={benchPressGif}
              />
              <ExerciseCard
                exerciseName="Press de banca con mancuernas (Dumbbell Bench Press)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={dumbbellBenchPressGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 2 (Hombro frontal y medio)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Press militar con mancuernas (Seated Dumbbell Shoulder Press)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 minutos"
                imageSrc={seatedDumbbellShoulderPressGif}
              />
              <ExerciseCard
                exerciseName="Press militar con barra de pie (Standing Barbell Military Press)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 minutos"
                imageSrc={barbellStandingMilitaryPressGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 3 (Pecho superior)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Press inclinado con mancuernas (Incline Dumbbell Press)"
                series="3 series x 10-12 reps"
                restTime="Descanso: 1.5 a 2 minutos"
                imageSrc={inclineDumbbellPressGif}
              />
              <ExerciseCard
                exerciseName="Press inclinado con barra (Incline Barbell Bench Press)"
                series="3 series x 10-12 reps"
                restTime="Descanso: 1.5 a 2 minutos"
                imageSrc={barbellInclineBenchPressGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 4 (Hombro medio para dar amplitud)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Elevaciones laterales con mancuernas (Dumbbell Lateral Raise)"
                series="4 series x 12-15 reps"
                restTime="Descanso: 1.5 a 2 minutos"
                imageSrc={dumbbellLateralRaiseGif}
              />
              <ExerciseCard
                exerciseName="Elevaciones laterales con cable (Cable Lateral Raise)"
                series="4 series x 12-15 reps"
                restTime="Descanso: 1.5 a 2 minutos"
                imageSrc={cableLateralRaiseGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 5 (Aislamiento del pecho)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Cruce de poleas o Aperturas (Pec-Deck) (Cable Crossover)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={standingCableFlyGif}
              />
              <ExerciseCard
                exerciseName="Aperturas en máquina (Pec Deck Fly)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={pecDeckFlyMachineGif}
              />
              <ExerciseCard
                exerciseName="Aperturas planas (Dumbbell Fly)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={dumbebellFlyGif}
              />
              <ExerciseCard
                exerciseName="Flexiones (Push-ups)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={pushUpGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 6 (Cabeza lateral/medial del tríceps)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Extensiones de tríceps en polea (con cuerda) (Tricep Cable Pushdown)"
                series="4 series x 10-12 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={cablePushDownGif}
              />
              <ExerciseCard
                exerciseName="Extensiones de tríceps con mancuerna (Dumbbell Overhead Tricep Extension)"
                series="4 series x 10-12 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={dumbbellTricepExtensionGif}
              />
              <ExerciseCard
                exerciseName="Patadas de tríceps con mancuerna (Dumbbell Tricep Kickback)"
                series="4 series x 10-12 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={dumbbellKickbackGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 7 (Cabeza larga del tríceps)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Press francés o rompecráneos (Skullcrusher (Lying Tricep Extension))"
                series="3 series x 10-12 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={skullCrusherGif}
              />
            </div>
          </section>
        </section>
      </section>
      <section className="pb-5">
        <h2>Día 2 y 5: Tracción (Espalda, Bíceps, Hombro posterior)</h2>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 1 (Amplitud de espalda)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Dominadas (o Jalón al pecho en polea) (Pull-ups)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={pullUpGif}
              />
              <ExerciseCard
                exerciseName="Jalón con agarre ergonómico (Mag Grip Lat Pulldown)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={magGripLatPulldownGif}
              />
              <ExerciseCard
                exerciseName="Jalón al pecho con agarre neutro (Neutral Grip Lat Pulldown)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={parallelGripLatPulldownGif}
              />
              <ExerciseCard
                exerciseName="Jalón al pecho con agarre supino (o 'Jalón supino') (Underhand Lat Pulldown)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={underhandLatPulldownGif}
              />
              <ExerciseCard
                exerciseName="Pullover con mancuerna (Dumbbell Pullover)"
                series="4 series x 10-12 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={dumbbellPulloverGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 2 (Densidad de la espalda)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Remo con barra (Underhand Barbell Row)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={underhandBarbellRowGif}
              />
              <ExerciseCard
                exerciseName="Remo con máquina (Seated Cable Row)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={seatedCableRowGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 3 (Grosor dorsal unilateral)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Remo unilateral con mancuerna (Single Arm Dumbbell Row)"
                series="3 series x 10-12 reps por brazo"
                restTime="Descanso: 1.5 a 2 minutos"
                imageSrc={oneArmDumbbellRowGif}
              />
              <ExerciseCard
                exerciseName="Remo en máquina Hammer (unilateral) (Hammer Machine Row)"
                series="3 series x 10-12 reps por brazo"
                restTime="Descanso: 1.5 a 2 minutos"
                imageSrc={hammerMachineRowing}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 4 (Hombro posterior y postura)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Face pulls (Tirones a la cara en polea) (Face Pulls)"
                series="4 series x 12-15 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={facePullGif}
              />
              <ExerciseCard
                exerciseName="Pájaros para hombro posterior (Bentover Dumbbell Reverse Fly) (Bentover Dumbbell Reverse Fly)"
                series="4 series x 12-15 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={bentoverDumbbellLateralRaise}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 5 (Bíceps principal)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Curl de bíceps con barra (o barra EZ) (Barbell Bicep Curl (o EZ Bar))"
                series="4 series x 10-12 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={barbellBicepCurlGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 6 (Trabaja el braquial y antebrazo)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Curl martillo con mancuernas (Dumbbell Hammer Curl)"
                series="3 series x 10-12 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={dumbbellHammerCurlGif}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 7 (Trapecio superior)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Encogimientos para trapecio con mancuernas (Dumbbell Shrugs)"
                series="3 series de 12-15 repeticiones"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={dumbbellShrugGif}
              />
              <ExerciseCard
                exerciseName="Encogimientos para trapecio barra (Barbell Shrugs)"
                series="3 series de 12-15 repeticiones"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={barbellShrug}
              />
            </div>
          </section>
        </section>
      </section>
      <section className="pb-5">
        <h2>Día 3 y 6: Piernas y Core (Cuádriceps, Isquiosurales, Gemelos)</h2>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 1 (Trabajo global de piernas)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Sentadillas (libres con barra o en máquina Hack) (Barbell Back Squat)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={pausedBackSquat}
              />
              <ExerciseCard
                exerciseName="Sentadillas con maquina (Hack Squat)"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={hackSquatMachine}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 2 (Isquiosurales y glúteos)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Peso muerto rumano (con barra o mancuernas) (Romanian Deadlift (RDL))"
                series="4 series x 8-10 reps"
                restTime="Descanso: 2 a 3 minutos"
                imageSrc={pausedDeadlift}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 3 (Empuje secundario de cuádriceps)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Prensa de piernas (Leg Press)"
                series="3 series x 10-12 reps"
                restTime="Descanso: 2 minutos"
                imageSrc={legPress}
              />
              <ExerciseCard
                exerciseName="Sentadilla Búlgara (Dumbbell Bulgarian Split Squat)"
                series="3 series x 10-12 reps"
                restTime="Descanso: 2 minutos"
                imageSrc={dumbbellBulgarianSplitSquat}
              />
              <ExerciseCard
                exerciseName="Zancadas (Dumbbell Lunges)"
                series="3 series x 10-12 reps"
                restTime="Descanso: 2 minutos"
                imageSrc={dumbbellLunge}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 4 (Para agotar el cuádriceps)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Extensiones de cuádriceps en máquina (Leg Extension)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={legExtension}
              />
              <ExerciseCard
                exerciseName="Sentadilla Goblet (Dumbbell Goblet Squat)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={dumbbellGobletSquat}
              />
              <ExerciseCard
                exerciseName="Sentadilla Sissy (Bodyweight Sissy Squat)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={bodyweightKneelingSissySquat}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 5 (Aislamiento Isquios)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Curl de isquios (tumbado o sentado en máquina) (Lying Leg Curl)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={legCurl}
              />
              <ExerciseCard
                exerciseName="Curl de isquios sentado (Seated Leg Curl)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={seatedLegCurl}
              />
              <ExerciseCard
                exerciseName="Curl de isquios con mancuerna (Dumbbell Leg Curl)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={dumbbellLegCurlGif}
              />
              <ExerciseCard
                exerciseName="Peso muerto a una pierna (Single-Leg RDL)"
                series="3 series x 12-15 reps"
                restTime="Descanso: 1.5 minutos"
                imageSrc={singleLegRDL}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 6 (Movimiento lento y controlado)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Elevación de talones de pie (Gemelos) (Standing Calf Raise)"
                series="4 series x 15-20 reps"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={barbellStandingCalfRaise}
              />
            </div>
          </section>
        </section>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 7 (Core y Abdomen)</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Elevación de piernas colgado (Hanging Leg Raise)"
                series="4 series al fallo"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={hangingLegRaise}
              />
              <ExerciseCard
                exerciseName="Crunch abdominal con peso (Weighted Decline Crunch)"
                series="4 series al fallo"
                restTime="Descanso: 1 a 1.5 minutos"
                imageSrc={weightedDeclineCrunch}
              />
            </div>
          </section>
        </section>
      </section>
      <section className="pb-5">
        <h2>Día 7: Descanso Total o Descanso Activo</h2>
        <section className='border p-5 rounded-2xl'>
          <h3>Ejercicio 1</h3>
          <section>
            <h4>Opciones:</h4>
            <div className='flex gap-2'>
              <ExerciseCard
                exerciseName="Caminar a ritmo ligero, estiramientos o yoga. Es crucial para que el músculo se recupere y crezca."
                series=""
                restTime=""
                imageSrc={yoga}
              />
            </div>
          </section>
        </section>
      </section>
      <section>
        <h2 className='text-2xl uppercase text-center font-bold mb-5'>Información Personal</h2>
        <section className="flex flex-col gap-4 max-w-2xl mx-auto w-fit mb-10">
          <div className="flex w-full">
            <div className="flex items-center w-[50%]">
              <h3 className="w-[25%] font-semibold">Weight</h3>
              <input
                className="border px-2 w-[50%] text-center"
                type="number"
                value={weight}
                onChange={(e) => setWeight(parseFloat(e.target.value) || 0)}
              />
              <select
                className="border px-2 bg-white w-[25%] text-center"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
            <div className="flex items-center w-[50%]">
              <h3 className="font-semibold w-[25%] text-center">Height</h3>
              <input
                className="border px-2 w-[50%] text-center"
                type="number"
                value={height}
                onChange={(e) => setHeight(parseFloat(e.target.value) || 0)}
              />
              <select
                className="border px-2 bg-white w-[25%] text-center"
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
              >
                <option value="cm">cm</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>
          <div className="flex items-center w-[50%]">
            <h3 className="w-[25%] font-semibold">Age</h3>
            <input
              className="border px-2 w-[50%] text-center"
              type="number"
              value={age}
              onChange={(e) => setAge(parseFloat(e.target.value) || 0)}
            />
            <p className="w-[25%] text-center">años</p>
          </div>
          <div className="flex items-center w-full">
            <h3 className="font-semibold w-[30%]">Factor de actividad:</h3>
            <select
              className="border px-2 py-1 bg-white flex-1 w-[70%] text-center"
              value={activityFactor}
              onChange={(e) => setActivityFactor(parseFloat(e.target.value))}
            >
              <option value="1.2">Sedentario (Poco o ningún ejercicio)</option>
              <option value="1.375">Ligeramente activo (Ejercicio ligero 1-3 días/semana)</option>
              <option value="1.55">Moderadamente activo (Entrenamiento 3-5 días/semana)</option>
              <option value="1.725">Muy activo (Rutina PPL 6 días/semana)</option>
              <option value="1.9">Extra activo (Trabajo físico pesado + entrenamiento)</option>
            </select>
            <p className="font-mono bg-gray-100 px-2 py-1 rounded w-[10%] text-center">{activityFactor}</p>
          </div>
          <div className="flex items-center w-full">
            <h3 className="font-semibold w-[30%]">Ajuste calórico:</h3>
            <select
              className='border px-2 py-1 bg-white flex-1 w-[70%] text-center'
              value={caloricAdjustment}
              onChange={(e) => setCaloricAdjustment(parseFloat(e.target.value))}
            >
              <option value="300">Para Hipertrofia (Ganancia muscular):</option>
              <option value="0">Para Mantenimiento:</option>
              <option value="-500">Para Definición (Pérdida de grasa):</option>
            </select>
            <p className="font-mono bg-gray-100 px-2 py-1 rounded w-[10%] text-center">{caloricAdjustment}</p>
          </div>
        </section>
        <div className='grid grid-cols-2 gap-x-5 gap-y-10'>
          <section>
            <h3 className='font-semibold text-[20px] text-center mb-5'>Tasa Metabólica Basal (TMB)</h3>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {`Esta ecuación calcula las calorías que el cuerpo quema en reposo absoluto. Requiere tres variables del usuario: Peso ($W_{kg}$), Altura en centímetros ($H_{cm}$) y Edad en años ($A$).`}
            </ReactMarkdown>
            <section>
              <h3>Para hombres:</h3>
              <div className='text-center'>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`$TMB = (10 \\times W_{kg}) + (6.25 \\times H_{cm}) - (5 \\times A) + 5 = \\colorbox{#fde68a}{${tmbMan} \\text{ kcal}}$`}
              </ReactMarkdown>
              </div>
            </section>
            <section>
              <h3>Para mujeres:</h3>
              <div className='text-center'>
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {`$TMB = (10 \\times W_{kg}) + (6.25 \\times H_{cm}) - (5 \\times A) - 161 = \\colorbox{#fde68a}{${tmbWoman} \\text{ kcal}}$`}
                </ReactMarkdown>
              </div>
            </section>
          </section>
          <section>
            <h3 className='font-semibold text-[20px] text-center mb-5'>Gasto Energético Total Diario (TDEE)</h3>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {`Una vez calculada la TMB, debes multiplicarla por un Factor de Actividad ($F_a$) para obtener las calorías de mantenimiento (el punto donde el usuario ni sube ni baja de peso).`}
            </ReactMarkdown>
            <div className='text-center'>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`$TDEE = TMB \\times F_a = \\colorbox{#fde68a}{\\(${tdeeMan}\\text{ kcal}_{(man)}\\)},\\colorbox{#fde68a}{\\(${tdeeWoman}\\text{ kcal}_{(woman)}\\)}$`}
              </ReactMarkdown>
            </div>
          </section>
          <section>
            <h3 className='font-semibold text-[20px] text-center mb-5'>Cálculo del Objetivo Calórico Final</h3>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
              {`Aquí aplicas el ajuste termodinámico según la meta del usuario. Llamaremos a esta variable $C_{total}$ (Calorías Totales Objetivo) y a la diferencia calórica $\\Delta C$.`}
            </ReactMarkdown>
            <div className='text-center'>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`$C_{total} = TDEE + \\Delta C = \\colorbox{#fde68a}{\\(${totalCaloricMan}\\text{ kcal}_{(man)}\\)},\\colorbox{#fde68a}{\\(${totalCaloricWoman}\\text{ kcal}_{(woman)}\\)}$`}
              </ReactMarkdown>
            </div>
          </section>
          <section>
            <h3 className='font-semibold text-[20px] text-center mb-5'>Distribución de Macronutrientes</h3>
            <p>Esta es la lógica que determinará los gramos exactos de proteína, grasa y carbohidratos que tu aplicación mostrará en pantalla. Se basa en las densidades energéticas universales (Proteína = 4 kcal/g, Grasa = 9 kcal/g, Carbohidratos = 4 kcal/g).</p>
            <section>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`Paso A: Calcular los gramos de Proteína $(P_g)$`}
              </ReactMarkdown>
              <div className='text-center'>
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {`$P_g = W_{kg} \\times 2.2 = \\colorbox{#fde68a}{${proteinGrams} \\text{ g}}$`}
                </ReactMarkdown>
              </div>
            </section>
            <section>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`Paso B: Calcular los gramos de Grasa $(F_g)$`}
              </ReactMarkdown>
              <div className='text-center'>
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                  {`$F_g = W_{kg} \\times 1.0 = \\colorbox{#fde68a}{${fatGrams} \\text{ g}}$`}
                </ReactMarkdown>
              </div>
            </section>
            <section>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`Paso C: Calcular los gramos de Carbohidratos $(C_g)$`}
              </ReactMarkdown>
              <div className='text-center'>
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {`$C_g = \\frac{C_{total} - (P_g \\times 4) - (F_g \\times 9)}{4} = \\colorbox{#fde68a}{\\( ${carbGramsMan} \\text{ g}_{(man)} \\)} , \\colorbox{#fde68a}{\\( ${carbGramsWoman} \\text{ g}_{(woman)} \\)}$`}
              </ReactMarkdown>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  );
}

export default App;