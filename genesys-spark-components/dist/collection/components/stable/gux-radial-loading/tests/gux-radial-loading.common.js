export const renderConfigs = ['default', 'modal', 'input', 'full-page'].map((context) => ({
    description: `should render as expected for "${context}" context`,
    html: `'<gux-radial-loading lang="en" context="${context}"></gux-radial-loading>`
}));
