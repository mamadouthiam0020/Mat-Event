import React from "react";

// Rendu minimaliste de markdown (titres, paragraphes, listes).
export default function Markdown({ text }) {
  const lines = (text || "").split("\n");
  const out = [];
  let list = [];
  let key = 0;

  const flushList = () => {
    if (list.length) {
      out.push(
        <ul key={`list-${key++}`}>
          {list.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  lines.forEach((raw) => {
    const line = raw.trim();
    if (line.startsWith("## ")) {
      flushList();
      out.push(<h3 key={`h-${key++}`}>{line.slice(3)}</h3>);
    } else if (line.startsWith("##")) {
      flushList();
      out.push(<h2 key={`h2-${key++}`}>{line.slice(2)}</h2>);
    } else if (line.startsWith("- ")) {
      list.push(line.slice(2));
    } else if (line === "") {
      flushList();
    } else {
      flushList();
      out.push(<p key={`p-${key++}`}>{line}</p>);
    }
  });
  flushList();

  return <div className="markdown">{out}</div>;
}
