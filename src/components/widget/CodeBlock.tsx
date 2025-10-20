"use client"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism"

type CodeBlockProps = {
  language: string
  code: string
}

export function CodeBlock({ language, code }: CodeBlockProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      showLineNumbers
      customStyle={{
        borderRadius: "12px",
        fontSize: "0.9rem",
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}
