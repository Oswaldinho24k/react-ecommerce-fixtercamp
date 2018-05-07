import React from 'react'
import {SelectField, MenuItem, TextField} from 'material-ui'

export const Filters = ({handleSearch, handleCategory, search, category, categories}) => (
    <div className="filters-container">
         <SelectField
          floatingLabelFixed={true}
          floatingLabelText="Category 🍭"
          value={category}
          style={{width:'30%'}}
          onChange={handleCategory}
        >
            <MenuItem 
                value={''} 
                primaryText={'Todos'} />
          {categories.map((c, key)=>(
              <MenuItem 
                key={key}
                value={c.id} 
                primaryText={c.name} />
          ))}
          
        </SelectField>
        <TextField
            hintText="Dulce rojo"
            value={search}
            floatingLabelFixed={true}
            floatingLabelText="Busca 😀"
            style={{width:'50%'}}
            onChange={handleSearch}/>
    </div>
)