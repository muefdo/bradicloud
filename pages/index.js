import Block from '@/components/block'
import Head from 'next/head'
import Blocks from '@/components/Blocks'
import Image from 'next/image'
import blockFile from '../public/blockFile.json'
import Layout from '../components/Layout'


export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <Block />
          <Blocks blockFile={blockFile} />
        </div>
      </Layout>
    </>
  )
}
