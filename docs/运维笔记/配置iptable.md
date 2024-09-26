# zerotier 开启NAT

```bash
sudo sysctl -w net.ipv4.ip_forward=1
PHY_IFACE=ztxnfiobg7; ZT_IFACE=a8b82dc007
sudo iptables -t nat -A POSTROUTING -o $PHY_IFACE -j MASQUERADE
sudo iptables -A FORWARD -i $PHY_IFACE -o $ZT_IFACE -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A FORWARD -i $ZT_IFACE -o $PHY_IFACE -j ACCEPT
sudo bash -c iptables-save > /etc/iptables/rules.v4
PHY_IFACE=docker0; ZT_IFACE=a8b82dc007
sudo iptables -t nat -A POSTROUTING -o $PHY_IFACE -j MASQUERADE
sudo iptables -A FORWARD -i $PHY_IFACE -o $ZT_IFACE -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A FORWARD -i $ZT_IFACE -o $PHY_IFACE -j ACCEPT
sudo bash -c iptables-save > /etc/iptables/rules.v4
PHY_IFACE=eth0; ZT_IFACE=a8b82dc007
sudo iptables -t nat -A POSTROUTING -o $PHY_IFACE -j MASQUERADE
sudo iptables -A FORWARD -i $PHY_IFACE -o $ZT_IFACE -m state --state RELATED,ESTABLISHED -j ACCEPT
sudo iptables -A FORWARD -i $ZT_IFACE -o $PHY_IFACE -j ACCEPT
sudo bash -c iptables-save > /etc/iptables/rules.v4


```

