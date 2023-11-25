import { FC } from 'react'
import { Card } from '../ui/Card'
import { SpeedIcon } from '../ui/SpeedIcon'
import { QualIcon } from '../ui/QualIcon'
import { RelationIcon } from '../ui/RelationIcon'

const benefits = [
  {
    id: 1,
    icon: <SpeedIcon />,
    title: 'Скорость',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все моей имеет заглавных свой но сбить рукописи семантика лучше, родного, всеми рыбными даль продолжил!',
  },
  {
    id: 2,
    icon: <QualIcon />,
    title: 'Качество',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все моей имеет заглавных свой но сбить рукописи семантика лучше, родного, всеми рыбными даль продолжил!',
  },
  {
    id: 3,
    icon: <RelationIcon />,
    title: 'Отношение',
    description:
      'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Все моей имеет заглавных свой но сбить рукописи семантика лучше, родного, всеми рыбными даль продолжил!',
  },
]

export const Benefits: FC = () => {
  return (
    <section>
      <h1 className="text-center mb-7">Почему мы?</h1>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
        {benefits.map(({ id, icon, title, description }) => (
          <Card key={id} icon={icon} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}
