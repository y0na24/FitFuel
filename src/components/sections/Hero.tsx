import Image from 'next/image'
import { FC } from 'react'

export const Hero: FC = ({}) => {
  return (
    <section className="flex flex-col justify-center lg:flex-row">
      <img
        className="rounded-md lg:mr-20"
        src="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/35/12/9f/35129ff1-7834-673e-fae2-755c263c534f/artwork.jpg/1200x630bb.jpg"
        alt="Hero"
      />
      <div>
        <h1>
          FitFuel - это компания, специализирующаяся на производстве и продаже спортивного питания высочайшего качества.
          Наша миссия - помочь людям достичь своих спортивных целей через правильное питание и дополнительные комплексы.
        </h1>
      </div>
    </section>
  )
}
