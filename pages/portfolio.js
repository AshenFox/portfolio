import ProjectItem from '../components/ProjectItem';
import Section from '../components/Section';
import Tag from '../components/Tag';

const tagList = [
  'show all',
  'front-end',
  'back-end',
  'html5',
  'sass',
  'less',
  'javascript',
  'nodejs',
  'electron',
  'reactjs',
  'meteor',
  'coffeescript',
  'mongodb',
  'mysql',
  'backbonejs',
  'ui/ux design',
  'animations',
  'game design',
];

export default function Portfolio(props) {
  return (
    <Section classNameStr={'portfolio'} {...props}>
      <div className='page__container'>
        <header className='portfolio__header'>
          <h1 className='portfolio__title'>web developer portfolio</h1>
          <h3 className='portfolio__description'>
            From Web Components and UI/UX animations to React.JS, Redux, Vue.JS, and
            Node.JS. Check out my latest web software development portfolio projects.
          </h3>
          <ul className='portfolio__filter'>
            {tagList.map((value) => (
              <Tag key={value} active={value === 'show all'}>
                {value}
              </Tag>
            ))}
          </ul>
          <small className='portfolio__filter-info'>
            Showing all projects. Use the filter to list them by skill or technology.
          </small>
        </header>

        <main className='portfolio__main'>
          <ul className='portfolio__project-list'>
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </ul>
        </main>

        <footer className='portfolio__footer'>
          <h4>Let's talk</h4>
          <span>Wanna get in touch or talk about a project?</span>
          <span>Feel free to contact me via email at rafael@caferati.me</span>
          <span>or drop a line in the form at the contact page</span>
        </footer>
      </div>
    </Section>
  );
}
