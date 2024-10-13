import {MdLanguage} from 'react-icons/md'
import {useState} from "react";

interface SelectLanguageProps {
  languages: string[];
}

function SelectLanguage({languages}: SelectLanguageProps) {
  const [i, setI] = useState(0);

  // turn the language codes to uppercase to display them
  const langNames: string[] = [];
  languages.map((language) => {
    langNames.push(language.toUpperCase());
    console.log(language);
  });

  // switches the next language in the list
  const switchLanguage = () => {
    setI((i + 1) % languages.length)
  }

  return (
    <div className={"hover:bg-teal-600"} onClick={switchLanguage}>
      <div className={"bg-transparent content-center mx-4 my-4 flex"}>
        <MdLanguage className={"inline-block flex-1 h-full content-center min-h-9 min-w-9"}/>
        <div className={"inline-block flex-1 content-center text-center font-bold text-xl min-w-9 select-none"}>
          {langNames[i]}
        </div>
      </div>
    </div>
  );
}

export default SelectLanguage;
