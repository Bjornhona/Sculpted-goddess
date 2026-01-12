'use client';
import { useEffect, useRef } from 'react';
import styles from './searchInput.module.scss';
import { useFormState } from 'react-dom';
import { recipesList } from '@/actions/search-actions';
import { FaSearch } from "react-icons/fa";

interface SearchInputState {
  hits: any[];
  count: number;
}

interface SearchInputProps {
  onRecipesChange?: (hits: any[]) => void;
}

const SearchInput = ({ onRecipesChange }: SearchInputProps) => {
  const initialState: SearchInputState = {
    hits: [],
    count: 0,
  };
  const [formState, formAction] = useFormState(recipesList, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  // Auto-submit form when search word is changed
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formRef.current?.isConnected) return;
  
    queueMicrotask(() => {
      if (formRef.current?.isConnected) {
        formRef.current.requestSubmit();
      }
    });
  };

  // Auto-submit default search once on initial render
  useEffect(() => {
    if (!formRef.current?.isConnected) return;

    queueMicrotask(() => {
    if (formRef.current?.isConnected) {
      formRef.current.requestSubmit();
    }
    });
  }, []);

  // Notify parent when recipes change
  useEffect(() => {
    if (formState.hits && formState.count !== undefined && onRecipesChange) {
      onRecipesChange(formState.hits);
    }
  }, [formState, onRecipesChange]);

  return (
    <form id="search-form" ref={formRef} action={formAction}>
      <div className={styles.search}>
        <div className={styles.searchIcon}><FaSearch /></div>
        <input 
          type="text" 
          name="search_word" 
          placeholder="Search" 
          onChange={handleSearchChange}
        />
      </div>
      {formState.count > 0 && (
        <p>{formState.count} recipies found</p>
      )}
    </form>
  )
}

export default SearchInput;
