import useToAscii from 'templates/hooks/useToAscii';


function NavLink({data}) {
  const asciiData = useToAscii(data);

  return (
    <p className="link-text asci">{asciiData}</p>
  );
}

export default NavLink;