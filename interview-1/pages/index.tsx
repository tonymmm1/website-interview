import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button, Text, Grid, Divider, Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react'
import { HamburgerIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const inter = Inter({ subsets: ['latin'] })

const githubLink = 'https://github.com/JoshuaMKW';
const githubDownloadLink = 'https://github.com/JoshuaMKW/GeckoLoader/releases/latest';
const githubReadmeLink = 'https://github.com/JoshuaMKW/GeckoLoader';

const getAvatarInfo = () => {
  return (
    <div>
      <Text className={styles.titleauthor}>
        by JoshuaMK
      </Text>
      <Image
        onClick={() => window.open(githubLink)}
        className={styles.titleicon}
        src="https://avatars.githubusercontent.com/u/60854312"
        width={100}
        height={100}
        alt="avatar"
      />
    </div>
  )
}

const getTitleComponent = () => {
  return (
    <div className={styles.titledrop}>
      <div className={styles.titlemenu}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon className={styles.hamburger} color={"lightgreen"} width={8} height={8} />}
            variant='ghost'
          />
          <MenuList>
            <MenuItem icon={<ExternalLinkIcon />} onClick={() => window.open(githubDownloadLink)}>
              Download Page
            </MenuItem>
            <MenuItem icon={<ExternalLinkIcon />} onClick={() => window.open(githubLink)}>
              Follow on GitHub
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <h2 className={styles.title}>
        GeckoLoader
      </h2>
      {getAvatarInfo()}
    </div>
  )
}

const getEmphasizedHeaderText = (text: String) => {
  return (
    <div className={styles.headingdiv}>
      <Text className={styles.heading}>
        {text}
      </Text>
      <Divider className={styles.headingdiv}></Divider>
    </div>
  )
}

const getGeckoGraphs = () => {
  return (
    <Grid className={styles.graphgrid}>
      <div className={styles.graphcontainer}>
        <Text className={styles.graphtext}>
          <i>GeckoLoader removes space limitations.</i>
        </Text>
        <Image
          className={styles.graph}
          src="/capacity_graph.svg"
          width={500}
          height={500}
          alt="graph"
        />
      </div>
      <div className={styles.graphcontainer}>
        <Text className={styles.graphtext}>
          <i>GeckoLoader performs better than standard.</i>
        </Text>
        <Image
          className={styles.graph}
          src="/performance_graph.svg"
          width={500}
          height={500}
          alt="graph"
        />
      </div>
    </Grid>
  )
}

const getGeckoLoaderPreviews = () => {
  return (
    <div>
      <Grid className={styles.previewgrid}>
        <Image className={styles.preview}
          src="/preview.png"
          width={400}
          height={400}
          alt="preview"
        />
        <Image className={styles.preview}
          src="/preview_cli.png"
          width={400}
          height={400}
          alt="preview"
        />
      </Grid>
    </div>
  )
}

const getGeckoLoaderInfo = () => {
  return (
    <div className={styles.body}>
      <div className={styles.pointpanel}>
        {getEmphasizedHeaderText('What is GeckoLoader?')}
        <Text className={styles.description}>
          GeckoLoader is a command line tool and GUI that allows you to take full advantage of Gecko Codes.
          With GeckoLoader you can easily patch your games with Gecko Codes, allowing you to
          customize any GameCube or Wii game to your liking.
        </Text>
      </div>
      <div className={styles.pointpanel}>
        {getEmphasizedHeaderText('How does it work?')}
        <Text className={styles.description}>
          GeckoLoader works by patching your game's memory with Gecko Codes.
          It does this by injecting a Gecko Code Handler and your Gecko Codes
          into the executable of your GameCube or Wii game. It then modifies the code further
          such that there is memory for the codes to reside. This allows you to customize your game to your liking.
        </Text>
      </div>
      <div className={styles.pointpanel}>
        {getEmphasizedHeaderText('Why should I use it?')}
        {getGeckoGraphs()}
        <Text className={styles.description}>
          GeckoLoader is the best way to use Gecko Codes. It is the only tool that allows you to use
          Gecko Codes without the space limitations of the standard Gecko Code Handler.
          Additionally, GeckoLoader is faster than the standard Gecko Code Handler.
          This is because GeckoLoader uses a more efficient method of patching your game.
          This allows you to use more Gecko Codes, and use them faster.
          GeckoLoader is also a command line tool.
          This allows you to easily automate the patching process.
          This is useful for speedrunners, who often need to patch their games with the same Gecko Codes.
          GeckoLoader is also a GUI tool.
          This allows you to easily patch your games with Gecko Codes without having to use the command line.
          Giving you the best of both worlds.
        </Text>
      </div>
      <div className={styles.pointpanel}>
        {getEmphasizedHeaderText('How can I use it?')}
        <Text className={styles.description}>
          To use GeckoLoader, you first have to obtain the game of your choice.
          You can do this legally by using the GameCube or Wii game you own to dump an ISO file onto an external storage device.
          You can then use GeckoLoader to patch your ISO with Gecko Codes.
          To do this, you can open the application as a GUI, and supply the prompts with the proper information.
          For further information on how to use GeckoLoader,
          see the <a className={styles.inlinelink} href={githubReadmeLink}>README.</a>
        </Text>
      </div>
      <div className={styles.pointpanel}>
        {getEmphasizedHeaderText('Where can I download it?')}
        <Text className={styles.description}>
          You can download GeckoLoader below! It is available for Windows and Linux.
          Additionally, you can download the source code from the GitHub repository.
        </Text>
        <Grid className={styles.buttongrid} templateColumns="repeat(2, 1fr)">
          <Button
            className={styles.linkbutton}
            colorScheme='green'
            variant='solid'
            onClick={() => window.open(githubDownloadLink)}
          >
            Download Page
          </Button>
          <Button
            className={styles.linkbutton}
            colorScheme='green'
            variant='solid'
            onClick={() => window.open(githubReadmeLink)}
          >
            Source Code
          </Button>
        </Grid>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>GeckoLoader Page</title>
        <meta name="description" content="GeckoLoader promotional page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/gecko.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {getTitleComponent()}
        <div className={styles.body}>
          <Text className={styles.hooktext}>
            <span>
              <i>Experience the unlocked potential of Gecko Codes.</i>
            </span>
          </Text>
          {getGeckoLoaderPreviews()}
          {getGeckoLoaderInfo()}
        </div>
      </main >
    </>
  )
}
