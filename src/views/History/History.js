import React from 'react'
import style from './History.module.css'
import DOMPurify from 'dompurify';

function History() {

    const text = [
        {
            id: "history-1",
            title: "The Creation of Bitcoin",
            text: 'Bitcoin was first introduced in 2008 through a whitepaper published online by an individual or group of individuals using the pseudonym Satoshi Nakamoto. The document, titled "Bitcoin: A Peer-to-Peer Electronic Cash System," presented a novel concept: a decentralized digital currency that did not require the involvement of intermediaries such as banks or financial institutions.<br/><br/> What made Bitcoin revolutionary was its underlying technology, the blockchain, which allowed transactions to be verified and recorded securely and transparently on a distributed public ledger. Nakamoto then launched the Bitcoin network in January 2009 by mining the first block, known as the "Genesis Block," thereby initiating the operation of this new form of digital currency.<br/><br/> The creation of Bitcoin marked the beginning of a new financial era characterized by decentralization and independence from central institutions.',
            image: "https://img.artpal.com/182852/6-34-40t.jpg",
            width: "500"
        },
        {
            id: "history-2",
            title: "First Bitcoin Transactions",
            text:"After the launch of the Bitcoin network in January 2009, the first transactions were conducted between Satoshi Nakamoto and Hal Finney, a prominent cryptographer and advocate for cryptocurrencies. These pioneers demonstrated the practicality of using Bitcoin as a medium of exchange and value transfer.<br/><br/> The early transactions also highlighted Bitcoin's potential to enable fast and economical global payments without the need for traditional intermediaries. These initial uses of Bitcoin laid the groundwork for its growing adoption and demonstrated its value as an alternative to fiat currencies and conventional payment systems.<br/><br/> The collaboration between Nakamoto and Finney represents a significant moment in Bitcoin's history, as it showcased that the cryptocurrency could be used practically and functionally, paving the way for its broader dissemination and acceptance.",
            image: "https://pbs.twimg.com/media/FmQD0sZXoAA3ekE.jpg:large",
            width: "900"
        },
        {
            id: "history-3",
            title: "Two pizzas for half a billion dollars",
            text: "The first documented commercial transaction in which Bitcoin was used as a means of payment became known as \"The Pizza Transaction.\" It is an iconic story dating back to May 22, 2010. <br/><br/> On that occasion, a user of Bitcointalk.org, an online forum dedicated to discussions about Bitcoin, posted an advertisement offering 10,000 Bitcoin in exchange for two pizzas. This user, known by the pseudonym \"Laszlo,\" simply wanted to test the practicality of using Bitcoin as a form of payment for real goods and services. <br/><br/>Another user of Bitcointalk.org accepted Laszlo's offer and ordered two pizzas from Papa John's using a credit card in exchange for 10,000 Bitcoin. The price of the 10,000 Bitcoin at the time was approximately $41. So, in exchange for two pizzas, Laszlo effectively spent $41 in Bitcoin. <br/><br/> This transaction became a symbol of the beginning of the practical use of Bitcoin as a means of real-world exchange. Although Bitcoin's value was very low at the time, the story demonstrates the confidence of some individuals in the new cryptocurrency and their willingness to use it as an alternative to traditional currencies. <br/><br/>Today, the pizza transaction is considered a historic event in the world of cryptocurrencies, and May 22 has become known as \"Bitcoin Pizza Day.\" Every year, Bitcoin enthusiasts celebrate this day by remembering the simplicity and audacity of Laszlo in making the first Bitcoin transaction for the purchase of physical goods.",
            image: "https://akm-img-a-in.tosshub.com/businesstoday/styles/medium_crop_simple/public/images/story/202205/fsp0lpyxsaejona.jpg?itok=3wxezI6X",
            width: "700"
        },
        {
            id: "history-4",
            title: "Who is Satoshi Nakamoto?",
            text: "The story of Satoshi Nakamoto is shrouded in mystery and speculation, as Nakamoto's identity remains unknown to this day. Nakamoto was the creator of Bitcoin and the author of the original whitepaper published in 2008, which introduced the concept of Bitcoin and blockchain to the world. <br/><br/> Satoshi Nakamoto began working on the Bitcoin project in 2007 but maintained anonymity throughout the entire development and launch process of the cryptocurrency. In January 2009, Nakamoto mined the first Bitcoin block, known as the \"Genesis Block,\" marking the official start of the Bitcoin network. <br/><br/>Nakamoto was active in the Bitcoin developer community in the early years of the cryptocurrency's life, participating in online discussions and collaborating with other community members to improve the Bitcoin protocol. However, in 2010, Nakamoto suddenly ceased to be actively involved in Bitcoin development and disappeared from the public scene. Since then, there have been no verifiable information about his identity or whereabouts. <br/><br/>In the years that followed, many theories have been put forward regarding Nakamoto's identity. Some believe Nakamoto to be a single person, while others believe it may be a group of people or even an organization. Several individuals have been identified as possible Satoshi Nakamoto, but none of these identities have been confirmed. <br/><br/>Despite the mystery surrounding his identity, Satoshi Nakamoto's contribution to the creation of Bitcoin and the birth of the cryptocurrency movement remains remarkably significant. The Bitcoin whitepaper and initial development work laid the groundwork for a new form of digital money that has had a profound impact on the entire financial and technological sector.",    
            image: "https://www.investopedia.com/thmb/dpTR3JdumkB_bE1PbYjXBVvbj-k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/satoshi-nakamoto_final-297c9027b6124891acf6e46918fa1b26.png",
            width: "800"
        }

    ];

    const render= text.map(item =>(
        <div key={item.id} className='row my-5'>
            <div className='col-10 offset-1'>
                <h2>{item.title}</h2>
                <p id='blackcolor' dangerouslySetInnerHTML={{
                    __html:DOMPurify.sanitize(item.text)
                }}></p>
            </div>
            <div className='col-10 offset-1 d-flex justify-content-center py-2'>
                <img width={item.width} id={style.image}  src={item.image} alt={item.title}/>
            </div>
        </div>
    ));


  return (
    <div className='container my-5'>
        <h1 style={{textAlign:'center'}}>History of Bitcoin<br/>The father of cryptocurrency</h1>
        {render}
        <p style={{fontSize: '6px', textAlign:'center'}} ><a id='marked' href='/'>for error page click here</a></p>
    </div>
  )
}

export default History