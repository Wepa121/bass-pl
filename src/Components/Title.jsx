import useToAscii from 'templates/hooks/useToAscii';


function Title({data}) {
  const asciiData = useToAscii(data);

  return (
    <div className={`title ${data !== 'Electronics' && 'title-content'}`}>{asciiData}</div>
  );
}

export default Title;