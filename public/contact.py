from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    service_type = db.Column(db.String(100), nullable=True)
    message = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='new')  # new, contacted, closed

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'service_type': self.service_type,
            'message': self.message,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'status': self.status
        }

class QuoteRequest(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20), nullable=True)
    service_type = db.Column(db.String(100), nullable=False)
    system_size = db.Column(db.String(50), nullable=True)
    location = db.Column(db.String(200), nullable=True)
    current_issues = db.Column(db.Text, nullable=True)
    preferred_contact_time = db.Column(db.String(100), nullable=True)
    message = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default='new')  # new, quoted, contacted, closed

    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'service_type': self.service_type,
            'system_size': self.system_size,
            'location': self.location,
            'current_issues': self.current_issues,
            'preferred_contact_time': self.preferred_contact_time,
            'message': self.message,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'status': self.status
        }

