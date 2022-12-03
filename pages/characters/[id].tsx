import Image from "next/image";
import { ReactNode } from "react";
import { Character } from "../../types";
import { GetServerSideProps } from "next";
import imageLoader from "../../imageLoader";
import Layout from "../../components/Layout";

export default function CharacterPage({ character }: { character: Character }) {

    return (
        <>
            <div>
                <h1>{character.name}</h1>

                <Image
                    loader={imageLoader}
                    unoptimized
                    src={character.image}
                    alt={character.name}
                    height={200}
                    width={200}
                />
            </div>
        </>
    )
}

CharacterPage.getLayout = function getLayout(page: ReactNode) {
    return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`)
    const character = await res.json()
    return {
        props: {
            character
        }
    }
}