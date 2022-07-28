import { Link } from 'react-router-dom'

export function About() {
    return ( 
        <body className="grid gap-5 bg-gray-200 fixed">
        <nav className="flex  justify-center pt-2 bg-gray-300 h-12 w-full sm:">
        <div className="text-lg items-center text-gray-500">
       <Link to="/" className="mr-20 hover:text-gray-900">
         Home
       </Link>
       <Link to="/cart" className="mr-20 hover:text-gray-900">
         Cart
       </Link> 
     <Link to="/about" className="hover:text-gray-900">
          About
     </Link>
     </div>
     </nav>
     <div className="flex pl-2 w-screen justify-center">
        <h1 className="text-4xl pt-3 text-slate-400 h-20">About</h1>
    </div>
    <div className="flex h-screen justify-center">
    <div className="inline-flex h-96 w-60 justify-center">
        <p className="text-slate-700 font-serif  text-lg">
            pirogfgfdgdfgdf
            gerfksagfgfdgfd
            ofpkaopsdgfd
            poapoagdgfdg
            skfopsafgg
            kfopsakfdgfdgfg
            jgeopirgieorjgpgfdieorogfdgf
            gdfgfdgfgfdgfgfdgfdgfdgfdgf
            igjiogerjogjerigjeoirpgj
            eopirjgeoipr
            jgoierjgoiergf
            grkmoepjkgeoprkgpoer
            gerkopigrekpoigkerger
            fjewiofjewoifjew
            fjewiofgewjoigewjige
            gjiogjeoirjgeoir
            gjersiogjerdoigjeriojger
            jgreiogjeoirgjeoirjgergjkerigerjgoie
            gjkeropigeriogjeroigerjiojgeroij
            gjeroigerjoihgjeroihjeroijehrio
            ghjeruoiherjoihjeriojeroijh
            hgjeroiherjhoierjoiheroikherjoiherji</p>
    </div>
    </div>
    </body>
    )
}