<Select
  name="locale"
  instanceId="locale"
  options={localeTags[0].items}
  defaultValue={defaultLocaleOption}
  onChange={ev => {
    values.locale = ev;
  }}
/>;
