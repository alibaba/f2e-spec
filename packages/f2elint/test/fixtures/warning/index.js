// warning: no-param-reassign
const funcResignParams = (params) => {
  params.a = 'a';
  return params;
};

funcResignParams({
  name: 'hello',
});
