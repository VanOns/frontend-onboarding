import PropTypes from 'prop-types'

function Icon({ icon, ...attrs }) {
    return (
        <svg {...attrs}>
            <use xlinkHref={`/__spritemap#sprite-${icon}`}></use>
        </svg>
    )
}

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default Icon
