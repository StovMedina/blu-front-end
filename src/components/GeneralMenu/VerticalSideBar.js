import Nav from "react-bootstrap/Nav";

function VerticalSideBar(options, props) {
  const handleClick = (key) => {
    const url = new URL(window.location);
    url.searchParams.set("link", key);
    window.history.pushState({}, "", url);
  };

  return (
    <div>
      <Nav defaultActiveKey={props.activeKey} className="flex-column">
        {options.options.map((option) => (
          <Nav.Link
            key={option.key}
            eventKey={option.eventKey}
            disabled={option.disabled}
            onClick={() => handleClick(option.eventKey)}
          >
            {option.text}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

export default VerticalSideBar;
