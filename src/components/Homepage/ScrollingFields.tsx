import React from 'react';
import styles from '@/styles/ScrollingFields.module.css';
import Item from './Item';
import fields from '@/data/fields';

const ScrollingFields: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            {fields.map((field, index) => (
                <Item
                    key={index}
                    index={index}
                    totalItems={fields.length}
                    imageUrl={field.imageUrl}
                    alt={field.alt}
                />
            ))}
        </div>
    );
};

export default ScrollingFields;

