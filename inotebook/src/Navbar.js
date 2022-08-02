import React from 'react'

const Navbar=(props)=>{
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
            <img style={styles.cartIcon} src="https://cdn-icons.flaticon.com/png/128/649/premium/649931.png?token=exp=1659425157~hmac=8d5a5389cc382c176811473199815f91" alt="cart-icon"/>
            <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    )
}

const styles={
    cartIcon:{
        height: 32,
        marginRight: 20
    },
    nav:{
        height: 70,
        background: '#4367b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'Center'
    },
    cartIconContainer:{
        position: 'relative'
    },
    cartCount:{
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
};

export default Navbar;