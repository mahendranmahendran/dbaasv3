import Editor from '@monaco-editor/react';

/**
 * Monaco-based SQL editor component
 * Props: 
 *   - value: Initial SQL query
 *   - onChange: Callback when query changes
 * Usage: Wrapped by SqlPlayground page
 */
export const SqlEditor = ({ value = '', onChange = () => {} }) => (
  <Editor
    height="90vh"
    defaultLanguage="sql"
    theme="vs-dark"
    value={value}
    onChange={onChange}
    options={{
      minimap: { enabled: false },
      fontSize: 14,
      wordWrap: 'on'
    }}
  />
);