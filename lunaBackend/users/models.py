from django.db import models

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class cUserManager(BaseUserManager):
    def create_user(self, email_address, password, **others):
        email_address = self.normalize_email(email_address)
        user = self.model(email_address=email_address, **others)
        user.set_password(password)
        user.save(using=self._db)

        return user
    
    def create_superuser(self, email_address, password, **others):
        others.setdefault('is_active', True)
        others.setdefault('is_superuser', True)
        others.setdefault('is_staff', True)

        return self.create_user(email_address, password, **others)

class cUser(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=72, unique=True, default='')
    email_address = models.EmailField(max_length=128, unique=True)
    business_email_address = models.EmailField(max_length=128)
    location = models.CharField(max_length=64)

    password = models.CharField(max_length=128)

    profile = models.ImageField(upload_to='profiles/', default='profiles/def.png')

    joined_at = models.DateTimeField(auto_now_add=True)

    is_verified = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    USERNAME_FIELD = 'email_address'
    REQUIRED_FIELDS = []

    objects = cUserManager()