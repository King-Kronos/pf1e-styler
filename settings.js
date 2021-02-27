const cfg = {
    name: 'background-1',
    data: {
        name: 'Background 1',
        scope: 'world',
        type: Boolean,
        default: false,
        config: true,
        onChange: (newValue) => {
            console.log(`Background 1 changed to ${newValue}!`);
        },
    }
};

Hooks.once('init', () => {
    game.settings.register('pf1e-styler', cfg.name, cfg.data);
});

function myMethodThatDoesSomethingLater() {
    const mySetting = game.settings.get('pf1e-styler', 'background-1');
    console.log(mySetting);
}