import React from 'react';
import { uuid } from 'uuidv4';

const Grid = ({ config, data }) => (
  <table>
    <thead>
    <tr>
      {config.map(( {title} ) => (
        <th key={ uuid() } >{ title }</th>
        )
      )}
    </tr>
    </thead>
    <tbody>
      {data.map(movie => (
        <tr key={ uuid() }>
          {config.map(( {component, field} ) => {
            const Component = component ? component : null;
              return component 
                ? <td key={ uuid() }><Component data={movie[field]} /></td>
                : (<td key={ uuid() }>{ movie[field] }</td>)
            }
          )}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;