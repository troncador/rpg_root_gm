
type PropertyType = {
    name: string;
    label: string | string[];
    className?: string | undefined;
    tags?: string[];
};

function Property(props: PropertyType) {
    const { name, label, tags, className } = props;

    const labels = Array.isArray(label)? label : [label]
    const cardclassName = className? `card ${className}` : 'card';
    const footer = tags? (
      <div className="card-footer text-muted">
        {tags.join(', ')}
      </div>
    ) : <></>;

    return (
      <div className="col">
        <div className={cardclassName}>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {labels.map( (l: string) => (<p className="card-text">{l}</p>))}
          </div>
          {footer}
        </div>
      </div>
    );
}


function Properties(props: {properties: PropertyType[]}) {
    const {properties} = props;

    const  tagsALL = properties.map((property) => (<Property key={property.name} {...property}/>));

    return (
      <div className="container">
        <div className="row">
          {tagsALL}
        </div>
      </div>
    );
}

export { Properties, PropertyType }