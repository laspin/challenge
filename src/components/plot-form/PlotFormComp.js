import React, { useState, useContext, useEffect } from 'react';
import { TeamsContext } from '../provider-comp';
import DownloadPDFButton from '../pdf-download/DownloadPDFButton';
import {
  CheckboxContainer,
  CheckboxFormBtn,
  CheckboxLabel,
  CheckboxFormTop,
  CheckboxFormBottom,
} from './PlotForm.styles';
import { SkeleLoader } from '../loader-comp';

const PlotFormComp = () => {
  const data = useContext(TeamsContext);

  const [loading, setLoading] = useState(true);
  const [isTeams, setIsTeams] = useState([]);
  const [isSelectedAll, setIsSelectedAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const [containerRef, setContainerRef] = useState(null);

  const toggleSelectAll = () => {
    setIsSelectedAll(!isSelectedAll);
    setSelectedItems(isSelectedAll ? [] : isTeams);
  };

  const toggleSelectItem = (item) => {
    if (isSelectedAll) {
      setIsSelectedAll(false);
      setSelectedItems([item]);
    } else if (selectedItems.includes(item)) {
      setSelectedItems([]);
    } else {
      setSelectedItems([item]);
    }
  };

  const resetChoices = () => {
    setSelectedItems([]);
    setIsSelectedAll(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSelectedItems(selectedItems);
    console.log('selected items ', selectedItems);
    resetChoices();
  };

  useEffect(() => {
    if (data) {
      let allTeams = data.map((itm) => itm.teamNo);
      setIsTeams(allTeams);
      setLoading(false);
    }
  }, [data]);

  if (loading) return <SkeleLoader />;

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <CheckboxContainer ref={setContainerRef}>
          <fieldset>
            <legend>Plotting the graph</legend>
            <CheckboxFormTop>
              <CheckboxLabel>
                <input
                  type="checkbox"
                  checked={isSelectedAll}
                  onChange={toggleSelectAll}
                />
                Select all teams
              </CheckboxLabel>
            </CheckboxFormTop>

            <CheckboxFormBottom>
              {isTeams.map((item) => (
                <CheckboxLabel key={item}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => toggleSelectItem(item)}
                    disabled={isSelectedAll}
                  />
                  {item}
                </CheckboxLabel>
              ))}
            </CheckboxFormBottom>
          </fieldset>
        </CheckboxContainer>
        <CheckboxFormBtn type="submit">Plot download</CheckboxFormBtn>
        <DownloadPDFButton data={selectedItems} containerRef={containerRef} />
      </form>
    </div>
  );
};

export default PlotFormComp;
