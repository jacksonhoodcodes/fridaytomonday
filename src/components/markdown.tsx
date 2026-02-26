export function Markdown({ content }: { content: string }) {
  const blocks = content.split(/\n\n+/).map((block) => block.trim());

  return (
    <div className="prose prose-zinc max-w-none prose-headings:tracking-tight">
      {blocks.map((block, index) => {
        if (block.startsWith('## ')) {
          return <h2 key={index}>{block.replace('## ', '')}</h2>;
        }
        if (block.startsWith('- ')) {
          const items = block.split('\n').map((line) => line.replace('- ', ''));
          return (
            <ul key={index}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{block}</p>;
      })}
    </div>
  );
}
