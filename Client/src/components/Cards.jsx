// eslint-disable-next-line no-unused-vars
import Card from './Card';

export default function Cards({characters , onClose}) {
  return (
    <div>
      
        {characters.map(({id,name, status ,species ,gender ,origin, image}) => {
          return (
            <Card
              id={id}
              key={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
    })}  
    </div>
  );
}
