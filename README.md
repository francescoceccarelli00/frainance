# F(ra)inance
È una Web Application sviluppata in React come progetto personale, in quanto sono diversi anni che seguo il mondo delle cryptovalute, e come progetto facoltativo universitario per il corso di 'Applicazioni Web' dell'Universitaà degli studi di Milano-Bicocca 2023/2024.

Per trovare tutto ciò che ti serve usa pure questo:
- [**Tecnologie usate**](#tecnologie)
- [**Struttura del progetto**](#struttura-del-progetto)
- [**Visualizzare il progetto o installarlo in locale**](#visita-la-web-app)
- [**Spiegazione del codice**](#spiegazione-del-codice)

## Tecnologie

Questo progetto è interamente sviluppato in **React** con create-react-app.  
Per velocità è stato utilizzato **Netifly** come piattaforma di hosting.
Ovviamente sono stati implementati differenti moduli NPM in modo da ottenere il massimo vantaggio dalla grande comunity di React.  

### Moduli NPM

-**react-router-dom**: Ovviamente necessario per la navigazione tra le pagine della Web App.  
-**Reactstrap** e **Bootstrap**: Perlopiù ho sfruttato Bootstrap per la creazione di un'interfaccia veloce da costruire e responsive.  
Reactstrap è stato utilizzato solamente per la costruzione dell'header, sia per la barra di ricerca che per il toggle responsive.  
-**Axios**: Per la fetch ho utilizzato Axios, una libreria JavaScript che consente di effettuare richieste HTTP.  
-**clsx**: Utilizzato per gestire dinamicamente il CSS in alcune porzioni di codice.  
-**react-alice-carousel**: Ha velocizzato e semplificato la costruzione del carosello nella Homepage.  
-**DOMpurify**: Utilizzata per "ripulire" i file json, in particolare era necessaria nelle pagine al dettaglio in quanto alcune descrizione avevano del codice html, questa libreria mi ha permesso di utilizzare quel codice e personalizzarlo.

### API utilizzate

Nonostante il design, il nome e il logo siano volutamente ispirati a ([Binance](https://www.binance.com/it)) le API utilizzate provengono tutte da ([CoinGecko](https://www.coingecko.com/)) che mi ha permesso di ottenere tutti i dati necessari alla costruzione della Web App previo accesso e ottenimento di una chiave, tramite queste API, infatti, sono disponibili 10000 chiamate mensili gratuite.

## Struttura del progetto

All'interno del progetto ci sono due cartelle principali:
-**public**: Che contiene tutti i file statici e accessibili
    -**index.html**: Pagina principale dove ho prestato particolarmente attenzione nell'utilizzo di meta-tag per una buona visualizzazione nella condivisione online
-**src**: È la cartella che contiene il codice sorgente dell'applicazione.
    -**assets**: Contiene solamente le immagini, poiché non ho utilizzato altri asset.
    -**components**: Tutti i componenti utilizzati e riutilizzabili.
    -**views**: Le pagine costruite che vengono poi visualizzate, le pagine sono:
        -*Home*
        -*Top 100*
            -*CryptoDetails*
        -*History*
        -*NotFound*

## Visita la Web App

Segui questo link per visualizzare la web app completa: ([F(ra)inance](https://frainance.netlify.app/)).

## Visualizzare il progetto in locale

Per montare il progetto in locale, è necessario seguire i seguenti passaggi:

1. **Clonare il Repository da GitHub**: Utilizzando Git, eseguire il comando `git clone` seguito dall'URL del repository GitHub di F(ra)inance:

   ```bash
   git clone https://github.com/francescoceccarelli00/frainance.git
   ```

2. **Installare le Dipendenze**: Una volta clonato il repository, spostarsi nella directory del progetto e eseguire il comando per installare le dipendenze del progetto utilizzando npm o yarn:

   ```bash
   cd frainance
   npm install
   # oppure
   yarn install
   ```

3. **Visualizzare l'Applicazione nel Browser**: Una volta installata, è possibile visualizzare l'applicazione nel browser aprendo l' URL che apparirà nel terminale. Esempio:

   ```
   http://localhost:3000
   ```

   L'applicazione sarà quindi accessibile e interattiva sulla propria macchina locale.

## Spiegazione del codice

Il progetto creato segue perlopiù le cose viste a lezione, le cose in più o diverse sono:

- In *Navbar* ho aggiungto il componente *Research* per inserire il filtro della barra di ricerca.
- All'interno della *Homepage* è presente il componente *Carousel* nel quale ho creato un carosello animato per la visualizzazione delle crypto in top 10 con l'aiuto di *react-alice-carousel*.
- In *CoinGrid* e *CoinTable* è presente la fetch con *Axios* che passa i dati rispettivamente in *CoinCards* e *CoinRow*, questi due componenti permettono la visualizzazione delle stesse informazioni in due modi differenti, entrambe rimandano a *CryptoDetails* la pagina al dettaglio delle singole crypto.
- *CryptoDetails* riporta più informazioni e una breve storia della cryptovaluta selezionata, qui, dato che alcuni dati erano riportati in codice ho utilizzato *DOMpurify* per "ripulire" i file json.
- L'ultima pagina è HIstory nella quale ho creato due costanti 
    - La prima è un array di oggetti con coppie chiave valore nelle quali ho riportato tutte le informazioni che volevo riportare, non ho trovato dei file che le avessero già,
    - La seconda esegue il mapping degll'array in modo tale da renderizzare i dati necessari

## Scelte UI/UX

Durante lo sviluppo ho chiesto dei feedback ad amici e colleghi in modo da rendere l'applicazione più accessibile e facile da utilizzare.
L'estetica prova a rimanere coerente con elementi come le card, riprese all'interno delle pagine al dettaglio, con colori e smussamenti degli angoli sempre costanti e con una gerarchia dei testi ben definita
