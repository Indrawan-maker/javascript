//sebuah fungsi yang bikin tanda warning menjadi error
//yg awalnya kode ada kesalahan menjadi berhenti di eksekusi
//errornya tidak silent kodenya tidak di rekomendasikan untuk di gunakan
function useStrictMode(){
    "use strict"
    const person = {
        firstName: "indra"
    }
    // error
    with (person) {
        console.info(firstName)
    }
}

useStrictMode()
