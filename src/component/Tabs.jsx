import  { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={styles.tabList}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            style={index === activeTab ? styles.activeTab : styles.tab}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div style={styles.tabContent}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

const styles = {
  tabList: {
    display: 'flex',
    borderBottom: '2px solid #ccc',
  },
  tab: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '2px solid transparent',
  },
  activeTab: {
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: '2px solid #007bff',
    fontWeight: 'bold',
  },
  tabContent: {
    padding: '20px',
  },
};

export default Tabs;
