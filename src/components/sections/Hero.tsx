import { FC } from 'react'

export const Hero: FC = ({}) => {
  return (
    <section className="flex flex-col justify-center items-center xl:items-start xl:flex-row">
      <img
        className="rounded-md mb-7 xl:mb-0 xl:mr-10 max-w-[630px] max-h-[630px]"
        src="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/35/12/9f/35129ff1-7834-673e-fae2-755c263c534f/artwork.jpg/1200x630bb.jpg"
        alt="Hero"
      />
      <div>
        <h2 className="text-3xl text-center xl:text-start xl:text-5xl">
          FitFuel - это компания, специализирующаяся на производстве и продаже спортивного питания высочайшего качества. Наша
          миссия - помочь людям достичь своих спортивных целей через правильное питание и дополнительные комплексы.
        </h2>
      </div>
    </section>
  )
}
