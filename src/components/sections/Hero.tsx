import Image from 'next/image'
import { FC } from 'react'

export const Hero: FC = ({}) => {
  return (
    <section className="flex">
      <img
        className="rounded-md mr-20"
        src="https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/35/12/9f/35129ff1-7834-673e-fae2-755c263c534f/artwork.jpg/1200x630bb.jpg"
        alt="Hero"
      />
      <div>
        <h1>
          Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Большого однажды взгляд все
          пустился то семь залетают, точках, дорогу рыбного составитель, дал продолжил грустный?
        </h1>
      </div>
    </section>
  )
}
