import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { color } from '@uiw/codemirror-extensions-color';
import { php } from "@codemirror/lang-php";

export const EditArea= () => {
  return (
    <CodeMirror
      value={''}
      theme={ vscodeDark }
      extensions={[ 
        color,
        php()
      ]}
    />
  );
};