import styled from "styled-components";

const Footer = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex: 0 1 auto;
`;

export default Footer;

const DEFAULT_PAGES = [{
  title: 'help',
  url: '/help',
  altText: 'Help',
  pages: [{
    title: "Contact Us",
    url: "/contact-us",
    altText: "Contact us"
  }],
  title: 'Home',
  url: '/home',
  altText: 'home',
  pages: []
}];

const StyledFooterLink = (page) => {
  return (
    <div>
      {page}
    </div>
  )
}

const GlobalFooter = (props) => {
  const pages = props.pages ?? DEFAULT_PAGES

  return (
    <section className="c-global-footer">
      <article>
        {pages.map(page => {
          <div key={page.url}><StyledFooterLink page={page} /></div>
        })}       
      </article>
    </section>
  )
}